import Header from "@/components/header/Header";

export default function Home() {
  return (
    <div>
      <Header>
        <h1 className="font-bold">Home Page</h1>
      </Header>
      <p>Hello 👋</p>
      <br />
      <p>Welcome to my simple dashboard displaying some sample user data.</p>
      <p>To see the user list, just click on 'Users' in the sidebar ...</p>
    </div>
  );
}
