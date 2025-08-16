# Day 17 - React JS Learning Journey 🚀

## 📌 Topic: Uncontrolled Components in React JS

### ✅ What I Learned
- *Uncontrolled components* are components where form data is handled by the *DOM* instead of React state.
- Unlike controlled components, you don’t need to use useState to track form values.
- Input values can be accessed directly using:
  - querySelector (direct DOM manipulation)
  - useRef hook (a more React-oriented way)

---

### 🛠 Implementations

#### 1. Using *querySelector*
- Accessing input values directly from the DOM.
- Example:
```jsx
const handleForm = (event) => {
  event.preventDefault();
  const user = document.querySelector("#user").value;
  const password = document.querySelector("#password").value;
  console.log(user, password);
};

2. Using useRef Hook

Attaching ref to input fields and accessing values from them.

Example:


const userRef = useRef();
const passwordRef = useRef();

const handleFormRef = (event) => {
  event.preventDefault();
  const user = userRef.current.value;
  const password = passwordRef.current.value;
  console.log("handle Ref", user, password);
};


---

📸 Output

Successfully built forms that log user inputs using both querySelector and useRef.

Practiced handling uncontrolled components efficiently.



---

🔑 Key Takeaways

Uncontrolled components are simpler for quick form handling.

However, for large or complex forms, controlled components (with useState) are more maintainable.

Using useRef is a better React practice compared to directly manipulating the DOM.



---

📅 Day 17 Complete!

Excited to continue my React journey and dive deeper into form handling & state management. 🚀

#ReactJS #JavaScript #WebDevelopment #LearningInPublic #100DaysOfCode

