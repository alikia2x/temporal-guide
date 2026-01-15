import { Provider } from "@/components/provider";
export default async function Layout({ children }: LayoutProps<"/zh">) {
    return <Provider lang="zh">{children}</Provider>;
}
