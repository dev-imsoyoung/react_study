/*eslint-disable*/

import '../App.css';
import { useEffect, useState } from 'react';
import ContentCard from '../components/ContentCard';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { Link } from 'react-router-dom';

function Home() {
  let 블로그명 = 'SSO BLOG';
  let [글제목, 글제목수정] = useState(['다 로컬 맛집 추천', '가 열심히 해보자', '나 아자아자 뭉쏘']);
  let [발행일자] = useState(240110);
  let [하트, 하트추가] = useState(0);

  let [contents, setContents] = useState([
    {
      id: '0',
      title: "뭉이의 일생",
      description: "일생은 참 아름다워",
      favorite: 0,
      createdDate: '2024-01-11'
    },
    {
      id: '1',
      title: "뭉이의 출근",
      description: "출근은 참 귀찮아",
      favorite: 0,
      createdDate: '2024-01-12'
    },
    {
      id: '2',
      title: "뭉이의 먹방",
      description: "과자는 맛있어",
      favorite: 0,
      createdDate: '2024-01-13'
    },
  ]);

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // 백엔드 서버
    // axios 라이브러리
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTodos(json));
  }, []);

  return (
    <div className="App">
      <div className='header'>
        <h2>{블로그명}</h2>
      </div>
      <Link to="/login">로그인</Link>
      {/* 
      <div style={{display:'flex', flexWrap: 'wrap'}}>
        {todos.length > 0 && todos.map((todo) => {
          return <div style={{ border: '1px solid red', width: '200px' }}>
            <h2>{todo.title}</h2>
            <p>{todo.userId}</p>
          </div>
        })}
      </div> */}

      <Button onClick={() => {
        console.log('눌');
        let copy = [...글제목];
        copy[1] = '가 할수있서';
        글제목수정(copy);
      }}
        styleType="black"
      >눌러보세요</Button>

      <Button onClick={() => {
        console.log("쏘");
        let copy = [...글제목.sort()];
        글제목수정(copy);
      }}
        styleType="red"
      >가나다정렬</Button>


      {contents.map(
        (content) => {
          return <ContentCard key={content.id} contents={contents} content={content} setContents={setContents} />
        }
      )}

      {/* {contents.map((content) => {
        return <div className='blogList' key={content.id}>
          <h2>{content.title}</h2>
          <p>{content.description}</p>
          <p>하트 받은수: {content.favorite}</p>
          <button type="button" onClick={() => {
            let copyContents = [...contents];
            const foundContentIndex = copyContents.findIndex((c) => { return c.id === content.id });
            copyContents[foundContentIndex] = {
              ...content,
              favorite: content.favorite + 1
            }
            setContents(copyContents);
          }}>하트</button>
          <p>발행일자: {content.createdDate}</p>
        </div>
      })} */}


      {/* {['다 로컬 맛집 추천', '가 열심히 해보자', '나 아자아자 뭉쏘'].map((글, index) => {
        return <div className='blogList'>
          <h2>{글}<p onClick={() => { 하트추가((이전값) => { return 이전값 + 1 }) }}>핫투버튼</p>{하트}</h2>
          <span>{발행일자}</span>
        </div>
      })} */}

      {/* <div className='blogList'>
        <h2>{글제목[0]}<p onClick={() => { 하트추가(하트 + 1) }}>핫투버튼</p>{하트}</h2>
        <span>{발행일자}</span>
      </div>
      <div className='blogList'>
        <h2>{글제목[1]}</h2>
        <span>{발행일자}</span>
      </div>
      <div className='blogList'>
        <h2>{글제목[2]}</h2>
        <span>{발행일자}</span>
      </div> */}

      <Modal></Modal>

    </div >
  );
}



export default Home;
