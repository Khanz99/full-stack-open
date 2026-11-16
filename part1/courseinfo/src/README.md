# Course information - exercises 1.1-1.5

Final version of the Full Stack Open course information app, prepared with AI assistance.

## Run and check

```sh
npm ci
npm run dev
npm run lint
npm run build
```

## How the code develops

- **1.1:** Extract Header, Content, and Total; App owns the data and passes props down.
- **1.2:** Content reuses Part three times instead of repeating its markup.
- **1.3:** Each topic becomes an object with name and exercises properties. Part reads those properties rather than trying to render the entire object.
- **1.4:** Collect the topic objects in one parts array and pass that array to Content and Total.
- **1.5:** Store everything in one course object: course.name and course.parts.

In App.jsx, Header receives the string course.name. Content receives the array course.parts and passes each item to Part. Total adds the exercises properties and displays 31. Destructuring in a parameter, such as ({ parts }), extracts that property from the props object.

The course permits assuming exactly three parts here. Rendering an arbitrary-length list is covered in Part 2.

Try changing the first exercises value from 10 to 11. Its row should show 11 and the total should change from 31 to 32. Restore 10 afterward.

Instructions: https://fullstackopen.com/en/part1/java_script/
