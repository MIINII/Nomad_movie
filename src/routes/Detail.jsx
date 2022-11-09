import { useParams } from 'react-router-dom';

const Detail = () => {
  // url에 있는 값을 반환해주는 기본 함수(특히 변경되는 값)
  const { id } = useParams();
  console.log('🚀 ⁝ Detail ⁝ id', id);

  return (
    <>
      <h1>디테일</h1>
    </>
  );
};

export default Detail;
