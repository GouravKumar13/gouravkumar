import Header from "./components/header";
import JobSection from "./components/jobSection";
import SideBar from "./components/sidebar";

function App () {
  return (
    <div className=" bg-[#D9D9D9] w-full h-fit  ">
      <Header />
      <SideBar />
      <JobSection />

    </div>
  );
}

export default App;
