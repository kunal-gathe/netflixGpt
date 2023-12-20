export function checkValidate(email, password) {
  const validateEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const validatePassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!validateEmail) return "Email Is Not Valid";
  if (!validatePassword) return "Password Is Not Valid";

  return null;
}

export const validateName = (name) => {
  const validateName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  if (!validateName) return "name Is Not Valid";
  return null;
};
