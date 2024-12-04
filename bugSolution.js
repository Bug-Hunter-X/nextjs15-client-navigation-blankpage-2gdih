```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <p>This is a paragraph.</p>
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js

export default function MyComponent() {
  //No changes needed in this component if the error was not originating from here.
  return (
    <div>
      <h2>This is a custom component</h2>
      <p>This is another paragraph inside the component</p>
    </div>
  );
}
```