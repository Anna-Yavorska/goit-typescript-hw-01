import { concatenation } from "./concatenation";
const button = document.querySelector('button');
const input = document.querySelector('input');
if (button && input) {
    button.addEventListener('click', () => {
        concatenation(input.value, "hello!");
    });
}
const user = {
    name: "bob",
    age: 12,
};
const admin = {
    name: "John",
    age: 40,
    role: "Admin",
};
//# sourceMappingURL=index.js.map