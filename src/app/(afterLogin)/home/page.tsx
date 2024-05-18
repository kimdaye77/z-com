import Tab from "@/app/(afterLogin)/home/_components/Tab";
import style from "./home.module.css";
import TabProvider from "@/app/(afterLogin)/home/_components/TabProvider";

export default function Home() {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        {/* <PostForm />
        <Post />
        <Post />
        <Post /> */}
      </TabProvider>
    </main>
  );
}
