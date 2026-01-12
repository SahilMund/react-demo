import React, { useEffect, useState } from 'react'

const FormHandler = () => {

    // const [fInput, setFInput] = useState("")
    // const [sInput, setSInput] = useState("")
    const [formData, setFormData] = useState(() => {
        const data = localStorage.getItem('formData') || "{}";
        const parsedData = JSON.parse(data);
        console.log('parsedData', parsedData)
        return parsedData
    })
    const [result, setResult] = useState("")

    //case:1 - we will pass an empty deps array
    // effect will run when the component is getting mounted
    useEffect(() => {
        console.log("Component mounted");
        // const data = localStorage.getItem('formData') || "{}";
        // const parsedData = JSON.parse(data);
        // console.log('parsedData', parsedData)
        // setFormData((prev) => ({
        //     ...prev, fInput: parsedData.fInput || "",
        //     sInput: parsedData.sInput || "",
        // }))
    }, [])
    // deps array - dependency array

    // case-2: if i pass some value inside deps array
    // the effect will run whenever the value changes
    useEffect(() => {
        console.log("value  changed", formData)
        localStorage.setItem('formData', JSON.stringify(formData))
    }, [formData])

    //case-3: when we will not pass any deps array
    // useEffect(() => {
    //     console.log("run on every render")
    // })

    const handleEval = (e) => {
        e.preventDefault();
        let result;
        const { op, fInput, sInput } = formData;
        if (op === "add") {
            result = Number(fInput) + Number(sInput);
        }

        setResult(result);
        setFormData({
            fInput: "",
            sInput: "",
            op: "add"
        })
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return (
        <div>
            <h2>Calculator</h2>

            <form onSubmit={handleEval}>
                <input value={formData.fInput}
                    name="fInput"
                    onChange={handleChange}
                    placeholder='enter first input' required />
                <input value={formData.sInput}
                    name="sInput"
                    onChange={handleChange}
                    placeholder='enter second input' required />
                <br>
                </br>
                <select placeholder="select the operation">
                    <option value="add">Add</option>
                    <option value="divide">Divide</option>
                    <option value="subs">Subs</option>
                    <option value="mul">Mul</option>
                </select>
                <br>
                </br>
                <button>Evaluate</button>
                <p>Result : {result}</p>
            </form>
        </div>
    )
}

export default FormHandler