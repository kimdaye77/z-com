import Tab from "@/app/(afterLogin)/home/_components/Tab";
import style from "./home.module.css";
import TabProvider from "@/app/(afterLogin)/home/_components/TabProvider";
import PostForm from "@/app/(afterLogin)/home/_components/PostForm";
import Post from "@/app/(afterLogin)/_component/Post";

export default function Home() {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </main>
  );
}
