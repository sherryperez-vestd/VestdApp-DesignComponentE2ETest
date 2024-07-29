import test, { } from "../base/base-pages"

test("Allow decimal value", async ({ assertions, functions, formNumberInput }) => {
    await functions.goto("/design/forms-number")
    await assertions.verifyURLContains("forms-number")

    await assertions.verifyElementisVisible(formNumberInput.allowDecimalValueInput)
    await formNumberInput.allowDecimalValueInput.clear()
    await formNumberInput.allowDecimalValueInput.type("1111111111111.1111111111111")
    await assertions.verifyElementToHaveValue(formNumberInput.allowDecimalValueInput, "1111111111111.1111111111111")

    await formNumberInput.allowDecimalValueInput.clear()
    await formNumberInput.allowDecimalValueInput.type("11...11")
    await assertions.verifyElementToHaveValue(formNumberInput.allowDecimalValueInput, "11.11")

    await formNumberInput.allowDecimalValueInput.clear()
    await formNumberInput.allowDecimalValueInput.type(".1")
    await assertions.verifyElementToHaveValue(formNumberInput.allowDecimalValueInput, "0.1")

    // await formNumberInput.tab_allowDecimalNumberInput()

})


test("Format the number", async ({ assertions, functions, formNumberInput }) => {
    await functions.goto("/design/forms-number")
    await assertions.verifyURLContains("forms-number")

    await assertions.verifyElementisVisible(formNumberInput.FormatTheNumberInput)
    await formNumberInput.FormatTheNumberInput.clear()
    await formNumberInput.FormatTheNumberInput.type("1111111111111")
    await assertions.verifyElementToHaveValue(formNumberInput.FormatTheNumberInput, "1,111,111,111,111")    

    await formNumberInput.FormatTheNumberInput.clear()
    await formNumberInput.FormatTheNumberInput.type("0")
    await assertions.verifyElementToHaveValue(formNumberInput.FormatTheNumberInput, "0")
})







