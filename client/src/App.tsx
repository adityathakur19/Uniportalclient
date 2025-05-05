import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Home from "@/pages/home";
import About from "@/pages/about";
import TopCourses from "@/pages/top-courses";
import StudentLife from "@/pages/student-life";
import Contact from "@/pages/contact";
import StudentRegistration from "@/pages/student-registration";
import AgentRegistration from "@/pages/agent-registration";
import { useState } from "react";
import ApplyModal from "@/components/registration/apply-modal";

function Router() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const toggleApplyModal = () => {
    setIsApplyModalOpen(!isApplyModalOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar 
        onApplyClick={toggleApplyModal} 
        isModalOpen={isApplyModalOpen}
      />
      <main className="flex-grow">
        <Switch>
          <Route path="/">
            <Home 
              onApplyClick={toggleApplyModal}
              isModalOpen={isApplyModalOpen}
            />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/top-courses">
            <TopCourses />
          </Route>
          <Route path="/student-life">
            <StudentLife />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/student-registration">
            <StudentRegistration />
          </Route>
          <Route path="/agent-registration">
            <AgentRegistration />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </main>
      <Footer />
      
      {/* Apply Now Selection Modal */}
      <ApplyModal 
        isOpen={isApplyModalOpen} 
        onClose={() => setIsApplyModalOpen(false)} 
      />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
