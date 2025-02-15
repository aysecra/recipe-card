import "./App.css";
import Card from "./components/Card/Card";
import food from "./assets/food.jpg"; // Tell webpack this JS file uses this image

function App() {
  const recipeAuthor = "Kodluyoruz";
  const recipeItem = {
    title: "Avokado Ezmeli Taco",
    date: "12 Ocak 2021, Salı",
    image: food,
    description:
      "Bu kremsi ve baharatlı avokado sosu, günlük taco'larınızı hazırlamak için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos ile servis edilir, ancak bazı vegan enchiladalara da harika bir katkı sağlar.",
  };

  const likeCount = 193;
  const isLiked = false;
  const Months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", 
                  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
  const Days = ["Pazar","Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
  const d = new Date();
  const day = d.getDate();
  const month = Months[d.getMonth()];
  const year = d.getFullYear();
  const dayName = Days[d.getDay()];
  const date = day + " " + month + " "+ year + ", " + dayName;

  return (
    <div className="App">
      <header className="App-header">
        <Card
          author={recipeAuthor}
          liked = {isLiked}
          likeCount = {likeCount}
          image = {recipeItem.image}
          title = {recipeItem.title}
          desc = {recipeItem.description}
          date = {date}

        />
      </header>
    </div>
  );
}

export default App;
