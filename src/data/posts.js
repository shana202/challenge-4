// Sample initial posts
const initialPosts = [
    {
      id: "1",
      title: "Getting Started with React",
      summary: "Learn the basics of React and build your first application.",
      date: "2023-01-01",
      content: `
        <p>React is a JavaScript library for building user interfaces. It's maintained by Facebook and a community of developers.</p>
        <h2>Why React?</h2>
        <p>React makes it easy to create interactive UIs. It efficiently updates and renders just the right components when your data changes.</p>
        <ul>
          <li>Component-based</li>
          <li>Declarative</li>
          <li>Learn Once, Write Anywhere</li>
        </ul>
      `,
      author: "John Doe",
    },
    {
      id: "2",
      title: "CSS Grid vs. Flexbox",
      summary: "A comparison of two powerful layout systems in CSS.",
      date: "2023-02-15",
      content: `
        <p>Both CSS Grid and Flexbox are modern layout systems. Choosing the right one depends on your layout needs.</p>
        <h2>CSS Grid</h2>
        <p>Best for two-dimensional layouts (rows and columns).</p>
        <h2>Flexbox</h2>
        <p>Best for one-dimensional layouts (rows <strong>or</strong> columns).</p>
        <ol>
          <li>Use Grid when you need a full page layout.</li>
          <li>Use Flexbox when you're aligning items in a single row or column.</li>
        </ol>
      `,
      author: "Jane Smith",
    },
    {
      id: "3",
      title: "Accessibility in Web Development",
      summary: "Tips for making your web applications more accessible.",
      date: "2023-03-10",
      content: `
        <p>Accessibility ensures that websites are usable by everyone, including people with disabilities.</p>
        <h2>Best Practices</h2>
        <ul>
          <li>Use semantic HTML</li>
          <li>Provide alt text for all meaningful images</li>
          <li>Ensure sufficient color contrast</li>
          <li>Use ARIA roles where appropriate</li>
        </ul>
      `,
      author: "Alex Johnson",
    },
  ];

  export default initialPosts;