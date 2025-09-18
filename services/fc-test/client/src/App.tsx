import Button from "./Button.tsx";
import Posts from "./components/post/Posts.tsx";

function App() {

  return (
    <>
        <main className={"bg-indigo-100 h-screen flex flex-col justify-start items-center"}>
            <section className={"h-20 flex flex-col justify-center items-center"}>
                <h1 className={"text-center text-indigo-500"}>My posts</h1>
            </section>

            <section className={"flex flex-row justify-center items-center gap-2 py-4 border-t-2 border-indigo-300 w-1/2"}>
                <Button onClick={() => console.log('hi')}>All posts</Button>
                <Button onClick={() => console.log('hi2')}>Favorites</Button>
            {/*    Search*/}
            </section>

            <section className={"flex flex-col justify-center items-center gap-1 w-full pt-12"}>
                <Posts></Posts>
            </section>
        </main>
    </>
  )
}

export default App
