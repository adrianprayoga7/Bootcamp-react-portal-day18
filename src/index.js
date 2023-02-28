import React from "react";
import ReactDOM  from "react-dom/client";
import { Form, Field } from "react-final-form";
import App from "./App";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);


const setTime = ms => new Promise(resolve => setTimeout(resolve, ms));

//set alert untuk menampilkan hasil nilai yang dipilih
const onSubmit = async values => {
    await setTime(300)
    window.alert(JSON.stringify(values, 0, 2))
  }

//class untuk membuat tampilan form
const Employe = () => (
    <App>
        <h1>Employee Form</h1>
        <Form onSubmit={onSubmit} initialValues={{}}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <div>
                {/* tampilan inputan firstname */}
                <label>First Name</label>
                <Field 
                    name="firstname"
                    component="input"
                    type="text"
                    placeholder="First Name"
                />
              </div>
              {/* tampilan inputan lastname  */}
              <div>
                <label>Last Name</label>
                <Field 
                    name="lastname"
                    component="input"
                    type="text"
                    placeholder="Last Name"
                />
              </div>
                {/* tampilan checkbox employed  */}
              <div>
                <label>Employed</label>
                <Field name="employed" component="input" type="checkbox" />
              </div>

              {/* tampilan untuk dropdown select  */}
              <div>
                <label>Education</label>
                <Field name="education" component="select">
                    <option />
                    <option value="master">Master</option>
                    <option value="bachelor">Bachelor</option>
                    <option value="highschool">High School</option>
                </Field>
              </div>

              {/* tampilan untuk mengisi expertise checkbox  */}
              <div>
                <label>Expertise</label>
                <div>
                    <label>
                        <Field 
                            name="expertise"
                            component="input"
                            type="checkbox"
                            value="html"
                        />{' '} HTML
                    </label>
                    <label>
                        <Field 
                            name="expertise"
                            component="input"
                            type="checkbox"
                            value="css"
                        />{' '} CSS
                    </label>
                    <label>
                        <Field 
                            name="expertise"
                            component="input"
                            type="checkbox"
                            value="javascript"
                        />{' '} JavaScript
                    </label>
                    <label>
                        <Field 
                            name="expertise"
                            component="input"
                            type="checkbox"
                            value="node"
                        />{' '} NodeJS
                    </label>
                    <label>
                        <Field 
                            name="expertise"
                            component="input"
                            type="checkbox"
                            value="react"
                        />{' '} ReactJS
                    </label>
                </div>
              </div>

              {/* tampilan form untuk mengisi keterampilan teknologi menggunakan radio button  */}
              {/* user hanya dapat mengisi salah satunya  */}
              <div>
                <label>Preferred Technology</label>
                <div>
                    <label>
                        <Field 
                            name="tech"
                            component="input"
                            type="radio"
                            value="frontend"
                        />{' '} Front End
                    </label>
                    <label>
                        <Field 
                            name="tech"
                            component="input"
                            type="radio"
                            value="backend"
                        />{' '} Back End
                    </label>
                    <label>
                        <Field 
                            name="tech"
                            component="input"
                            type="radio"
                            value="fullstack"
                        />{' '} Full Stack
                    </label>
                </div>
              </div>

              {/* tampilan untuk note  */}
              <div>
                <label>Notes</label>
                <Field name="notes" component="textarea" placeholder="Notes" />
              </div>

              {/* tampilan button  */}
              <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
              Submit
            </button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
              </div>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
        )}
        />
    </App>
)



//proses rendering 
root.render(<Employe />);