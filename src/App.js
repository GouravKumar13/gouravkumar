import Header from "./components/header";
import BottomBar from "./components/jobListing-jobSearch/BottomBar";
import JobSection from "./components/jobSection";
import SideBar from "./components/sidebar";

function App () {
  return (
    <div className="relative bg-[#ececec] w-full h-full  ">
      <Header />
      <div className="hidden md:block">
        <SideBar />
      </div>
      <JobSection />

      <BottomBar />



    </div>
  );
}

export default App;
