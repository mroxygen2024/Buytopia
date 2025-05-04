
export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-10 py-4">
      <div className="container mx-auto text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Syntax Squad. All rights reserved.
      </div>
    </footer>
  );
}
