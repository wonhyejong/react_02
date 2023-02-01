import './App.css';
import CardList from './components/CardList';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <CardList />
    </div>
  );
}

export default App;

//useState 
//useEffect 
//useCallback  
// 퍼블릭 폴더 정적인 파일들(이미지,...), 앱컴파일에 필요하지 않은 요소 절대경로 사용이 가능해진다. 
// src 폴더 앱이 컴파일 할때 사용되는 요소들 