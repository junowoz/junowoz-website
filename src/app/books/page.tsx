import { books } from "@/data/books";
import React from "react";

export default function Books() {
  return (
    <div id="books">
      <table className="border-separate text-left">
        <thead>
          <tr>
            <th className="border-b-2 border-white">TITLE</th>
            <th className="border-b-2 border-white pl-8">AUTHOR</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>
                <i>{book.title}</i>
              </td>
              <td className="pl-8">{book.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
