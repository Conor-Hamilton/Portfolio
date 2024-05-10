export default function Footer() {
  return (
    <footer className="bg-[#0a192f] w-full">
      <div className="container mx-auto py-4 px-8 text-center">
        <p>&copy; {new Date().getFullYear()} Conor Hamilton</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#aboutme" className="text-gray-600 hover:text-gray-800">
            About
          </a>
          <a href="#myskills" className="text-gray-600 hover:text-gray-800">
            My Skills
          </a>
          <a href="#projects" className="text-gray-600 hover:text-gray-800">
            Projects
          </a>
        </div>
      </div>
    </footer>
  );
}
