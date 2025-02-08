import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <header>
    <div class="logo">InternshipArticles</div>
    <div class="hamburger">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <nav class="nav-bar">
      <ul>
        <li><a href="/index.html" class="active">Home</a></li>
        <li><a href="../articles_page/articles.html">Articles</a></li>
        <li><a href="/share_page/Share.html">Share</a></li>
        <li><a href="/contacts.html">Contacts</a></li>
      </ul>
    </nav>
  </header> 
    </main>
  );
}

export default App;
