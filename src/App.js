import React from 'react';
import './style.css';

export default function App() {
  //Nullish Colaescing
  const test = 3 > 4 ?? false;
  console.log(test);

  //Optional Chaining
  const person = {
    name: 'Gerardo',
    email: 'mail@mail.com',
    currentJob: null
  };
  const test1 = person?.current; //undefined
  const test2 = person?.email; //mail@mail.com
  const test3 = person.surname; //undefined - rompe

  console.log(test1);
  console.log(test2);
  console.log(test3);

  //Logical nullish assignment (The logical nullish assignment (x ??= y) operator only assigns if x is nullish (null or undefined).)
  const a = { duration: 50 };

  a.duration ??= 10;
  console.log(a.duration);
  // expected output: 50

  a.speed ??= 25;
  console.log(a.speed);
  // expected output: 25

  //Logical OR assignment (||=) (The logical OR assignment (x ||= y) operator only assigns if x is falsy.)if (false)
  //Falsy Types
  // if (null)
  // if (undefined)
  // if (0)
  // if (-0)
  // if (0n)
  // if (NaN)
  // if ("")

  const b = { duration: 50, title: '', name: null };

  b.duration ||= 10;
  console.log(b.duration);
  // expected output: 50

  a.title ||= 'title is empty.';
  console.log(a.title);
  // expected output: "title is empty"

  a.name ||= 'Luigi';
  console.log(a.name);
  // expected output: "title is empty"

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
