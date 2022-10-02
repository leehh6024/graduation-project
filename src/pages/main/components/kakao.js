// const Map = (props) => {
//   const [is_write, setWrite] = useState(false);
//   const normalMarker = useSelector((state) => state.marker.normal);
//   const hotMarker = useSelector((state) => state.marker.hot);

//   useEffect(() => {
//     const container = document.getElementById("myMap"); //지도 표시할 div
//     const options = {
//       center: new kakao.maps.LatLng(37.545642179638556, 126.98117041998981), //지도 중심 좌표
//       level: 8, //지도의 확대 레벨
//     };
//     const map = new kakao.maps.Map(container, options); //지도를 생성합니다.

//     // 게시물 수가 10개 미만인 마커를 표시합니다.
//     normalMarker.map((p, idx) => {
//       const markers = new kakao.maps.Marker({
//         // 지도 중심좌표에 마커를 생성합니다.
//         map: map,
//         position: new kakao.maps.LatLng(p.latitude, p.longitude),
//         image: markerImage,
//       });
//       var infowindow = new kakao.maps.InfoWindow({
//         content: iwContent,
//       });
//       kakao.maps.event.addListener(markers, "mouseover", function () {
//         infowindow.open(map, markers);
//       });
//       kakao.maps.event.addListener(markers, "mouseout", function () {
//         infowindow.close(map, markers);
//       });
//       // 마커를 클릭했을 때 게시물 작성버튼과 해당 게시물이 생성되게 설정했습니다.
//       kakao.maps.event.addListener(markers, "click", function () {
//         markerDetail(p.id);
//       });
//     });
//     // 마커가 생성될때 바로 화면상에 새로생성된 마커를 보여주기 위해 배열안에 normalMarker를 넣어놨습니다.
//   }, [normalMarker]);

//   const markerDetail = (id) => {
//     setmarkerId(id);
//     // 게시물 작성 버튼이 보입니다.
//     setWrite(true);
//     // 게시물 component를 보여줍니다.
//     props.showPost();
//     // 해당 마커에 저장된 게시물 정보를 가져옵니다.
//     dispatch(postActions.getPostAX(id));
//   };

//   return (
//     <React.Fragment>
//       //맵을 보여주는 컴포넌트 입니다.
//       <MapContainer id="myMap"></MapContainer>
//       //마커가 눌렀을 때 그리고 로그인 상태일 때 게시글 작성 버튼이 보이게
//       했습니다.
//       {is_write && is_login ? (
//         <AddBtn>
//           <Fab
//             color="primary"
//             aria-label="add"
//             variant="extended"
//             onClick={() => {
//               window.scrollTo(0, 0);
//               setWriteModal(true);
//             }}
//           >
//             <AddIcon />
//             <Word>게시글추가</Word>
//           </Fab>
//         </AddBtn>
//       ) : null}
//       {is_writeModal ? (
//         <PostWrite markerId={markerId} close={closeWriteModal} hot={hot} />
//       ) : null}
//     </React.Fragment>
//   );
// };

// const MapContainer = styled.div`
//   position: relative;
//   margin: auto;
//   margin-bottom: 60px;
//   width: 900px;
//   height: 500px;
//   @media (max-width: 1000px) {
//     width: 85%;
//   }
//   @media (max-width: 450px) {
//     width: 95%;
//     height: 400px;
//   }
// `;

// const AddBtn = styled.div`
//   position: fixed;
//   right: 30px;
//   bottom: 100px;
//   z-index: 10;
// `;

// const Word = styled.span`
//   @media (max-width: 614px) {
//     display: none;
//   }
// `;
