import { useRef, useEffect } from "react";

export function useBottomSheet() {
	const sheetRef = useRef(null);

	const metrics = useRef({
		touchStart: {
			sheetY: 0,
			touchY: 0,
		},
		touchMove: {
			prevTouchY: 0,
			movingDirection: "none",
		},
	});

	// Touch Event 핸들러들을 등록한다.
	useEffect(() => {
		const handleTouchStart = (e) => {
			const { touchStart, touchMove } = metrics.current;

			touchStart.sheetY = sheetRef.current.getBoundingClientRect().y;
			touchStart.touchY = e.touches[0].clientY;
		};

		const handleTouchMove = (e) => {
			e.preventDefault();

			const { touchStart, touchMove } = metrics.current;
			const currentTouch = e.touches[0];

			if (touchMove.prevTouchY === undefined) {
				touchMove.prevTouchY = touchStart.touchY;
			}

			if (touchMove.prevTouchY < currentTouch.clientY) {
				touchMove.movingDirection = "down";
			}

			if (touchMove.prevTouchY > currentTouch.clientY) {
				touchMove.movingDirection = "up";
			}

			// 터치 시작점에서부터 현재 터치 포인트까지의 변화된 y값
			const touchOffset = currentTouch.clientY - touchStart.touchY;
			let nextSheetY = touchStart.sheetY + touchOffset;

			// nextSheetY 는 MIN_Y와 MAX_Y 사이의 값으로 clamp 되어야 한다
			if (nextSheetY <= MIN_Y) {
				nextSheetY = MIN_Y;
			}

			if (nextSheetY >= MAX_Y) {
				nextSheetY = MAX_Y;
			}

			// sheet 위치 갱신.
			sheetRef.current.style.setProperty("transform", `translateY(${nextSheetY - MAX_Y}px)`);
		};

		const handleTouchEnd = (e) => {
			const { touchMove } = metrics.current;

			// Snap Animation
			const currentSheetY = sheetRef.current.getBoundingClientRect().y;

			if (currentSheetY !== MIN_Y) {
				if (touchMove.movingDirection === "down") {
					sheetRef.current.style.setProperty("transform", "translateY(0)");
				}

				if (touchMove.movingDirection === "up") {
					sheetRef.current.style.setProperty(
						"transform",
						`translateY(${MIN_Y - MAX_Y}px)`
					);
				}
			}

			// metrics 초기화.
			metrics.current = {
				touchStart: {
					sheetY: 0,
					touchY: 0,
				},
				touchMove: {
					prevTouchY: 0,
					movingDirection: "none",
				},
			};
		};

		sheetRef.current.addEventListener("touchstart", handleTouchStart);
		sheetRef.current.addEventListener("touchmove", handleTouchMove);
		sheetRef.current.addEventListener("touchend", handleTouchEnd);

		return () => {
			sheetRef.current.removeEventListener("touchstart", handleTouchStart);
			sheetRef.current.removeEventListener("touchmove", handleTouchMove);
			sheetRef.current.removeEventListener("touchend", handleTouchEnd);
		};
	}, []);

	return { sheet: sheetRef };
}

const MIN_Y = 60; // 바텀시트가 최대로 높이 올라갔을 때의 y 값
const MAX_Y = window.innerHeight - 80; // 바텀시트가 최소로 내려갔을 때의 y 값
const BOTTOM_SHEET_HEIGHT = window.innerHeight - MIN_Y; // 바텀시트의 세로 길이
