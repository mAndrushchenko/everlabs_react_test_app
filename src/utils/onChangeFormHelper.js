export const onChangeFormHelper = ({ target }) => {
  const isCheckBox = target.type === "checkbox"

  return { [target.name]: isCheckBox ? target.checked : target.value }
}
