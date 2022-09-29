function VisitedList({ placeList }) {
  const [isVisitedOpen, setIsVisitedOpen] = useRecoilState(visitedModal);
  //내가 선택할 모달창
  const [selectedModal, setSelectedModal] = useState(null);

  const openModalHandler = (el) => {
    setVtModal(el);
    setIsVisitedOpen(true);
  };
  const closeVisitedModal = () => {
    if (isVisitedOpen) {
      setVtModal(null);
      setIsVisitedOpen(false);
    }
  };

  //! 배열을 매핑해서 모달에 넣을때는 array.map()을 작성하는 그 위치에서 모달창을 만들어야함
  console.log(vtModal);
  return (
    <>
      <Styled.ModalContainer>
        {isVisitedOpen ? (
          <>
            <Styled.ModalBackdrop onClick={closeVisitedModal}>
              <Styled.ModalView onClick={(e) => e.stopPropagation()}>
                {/* 모달창이 몇개가 켜지든 모든 모달창에 하나의 이미지가 들어가게 한다. */}
                <ModalVisited
                  visitedImg={vtModal && vtModal.visited_thumbnail_path}
                />
              </Styled.ModalView>
            </Styled.ModalBackdrop>
          </>
        ) : null}
      </Styled.ModalContainer>
      <Body>
        {placeList.map((el) => {
          return (
            <div
              className="visited-cards-list"
              key={el.id}
              onClick={() => openModalHandler(el)}
            >
              {/* <div className="visited-cards-list" key={el.id}> */}
              <VisitedCards
                id={el.id}
                area={el.visited_area}
                sigg={el.visited_sigg}
                memo={el.visited_memo}
                image={el.visited_thumbnail_path}
              />
            </div>
          );
        })}
      </Body>
    </>
  );
}
