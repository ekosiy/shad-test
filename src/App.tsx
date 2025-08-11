import {AppSidebar} from "@/components/app-sidebar";
import {SidebarProvider} from "@/components/ui/sidebar.tsx";

function App() {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center">
            <SidebarProvider>
                <AppSidebar></AppSidebar>
            </SidebarProvider>
        </div>
    )
}

export default App
