import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-200">
            <div className="container mx-auto py-4 px-8">
                <p className="text-center text-gray-600">&copy; {new Date().getFullYear()} Conor Hamilton</p>
                <div className="flex justify-center mt-4">
                    <a href="#about" className="mr-4 text-gray-600 hover:text-gray-800">about</a>
                    <a href="#languages" className="mr-4 text-gray-600 hover:text-gray-800">languages</a>
                    <a href="#projects" className="text-gray-600 hover:text-gray-800">projects</a>
                </div>
            </div>
        </footer>
    );
}
