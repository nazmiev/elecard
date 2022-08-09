import React from "react";
import "./App.css";
import Card from "./components/card";
import Pagination from "./components/pagination";
import Skeleton from "./components/skeleton";

function App() {
  (function () {
    var ul = document.querySelectorAll(
      ".treeCSS > li:not(:only-child) ul, .treeCSS ul ul"
    );
    for (var i = 0; i < ul.length; i++) {
      var div = document.createElement("div");
      div.className = "drop";
      div.innerHTML = "+"; // картинки лучше выравниваются, т.к. символы на одном браузере ровно выглядят, на другом — чуть съезжают
      ul[i].parentNode.insertBefore(div, ul[i].previousSibling);
      div.onclick = function () {
        this.innerHTML = this.innerHTML == "+" ? "−" : "+";
        this.className = this.className == "drop" ? "drop dropM" : "drop";
      };
    }
  })();

  const [items, setItems] = React.useState([]); // используется для вывода элементов
  const [currentPage, setCurrentPage] = React.useState(1); // используется для пагинации
  const [isLoading, setIsLoading] = React.useState(true); // используется для скелетона

  const [selected, setSelected] = React.useState(0); // выбранный элемент сортировки
  const list = [
    { name: "по названию,", sort: "image" },
    { name: "по категории,", sort: "category" },
    { name: "по дате,", sort: "timestamp" },
    { name: "по размеру файла", sort: "filesize" },
  ]; // элементы сортировки

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://62e9dd7d01787ec7121d4705.mockapi.io/pictures?page=${currentPage}&limit=10&sortBy=${list[selected].sort}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    // .then((data) => {console.log(data);})
  }, [selected, currentPage]); // рисует и перерисовывает элементы

  return (
    <div className="App" id="container">
      <div className="header">
        <div className="left">Шапка</div>
        <div className="right">
          <p>
            Сортировка:
            {list.map((obj, i) => (
              <a
                key={i}
                onClick={() => setSelected(i)}
                className={selected === i ? "active" : ""}
              >
                {obj.name}
              </a>
            ))}
          </p>
        </div>
      </div>
      <div className="tree">
        <ul class="treeCSS"> 
        {/* пример древовидной структуры */}
          <li>
            Root
            <ul>
              <li>
                Категория 1
                <ul>
                  <li>
                    Элемент 1
                    <ul>
                      <li>Размер</li>
                      <li>Дата</li>
                      <li>URL</li>
                    </ul>
                  </li>
                  <li>
                    Элемент 2
                    <ul>
                      <li>Размер</li>
                      <li>Дата</li>
                      <li>URL</li>
                    </ul>
                  </li>
                  <li>
                    Элемент 3
                    <ul>
                      <li>Размер</li>
                      <li>Дата</li>
                      <li>URL</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                Категория 2
                <ul>
                  <li>
                    Элемент 1
                    <ul>
                      <li>Размер</li>
                      <li>Дата</li>
                      <li>URL</li>
                    </ul>
                  </li>
                  <li>
                    Элемент 2
                    <ul>
                      <li>Размер</li>
                      <li>Дата</li>
                      <li>URL</li>
                    </ul>
                  </li>
                  <li>
                    Элемент 3
                    <ul>
                      <li>Размер</li>
                      <li>Дата</li>
                      <li>URL</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="cards">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <Card key={obj.times} {...obj} />)}
      </div>
      <div className="footer">
        <div className="left">Футер</div>
        <div>
          <Pagination onChangePage={(number) => setCurrentPage(number)} />
        </div>
        <div className="right">Опять показать все картинки</div>
      </div>
    </div>
  );
}

export default App;
