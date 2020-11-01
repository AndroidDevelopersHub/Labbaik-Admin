import React, { useState } from "react";
import axios from "axios";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFade,
  CForm,
  CFormGroup,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CLabel,
  CSelect,
  CRow,
} from "@coreui/react";

const ProductInsert = () => {
  const [showElements, setShowElements] = React.useState(true);
  const [title, settitle] = useState("");
  const [price, setprice] = useState("");
  const [discountPrice, setdiscountPrice] = useState("");
  const [discountPercent, setdiscountPercent] = useState("");
  const [category, setcategory] = useState("");
  const [department, setdepartment] = useState("");
  const [quantity, setquantity] = useState("");
  const [brand, setbrand] = useState("");
  const [ratings, setratings] = useState("");
  const [desc, setdesc] = useState("");
  const [size, setsize] = useState([]);
  const [colors, setcolors] = useState([]);
  const [thumbnail, setthumbnail] = useState("");
  const [images, setimages] = useState("");
  const [selectedImages, setselectedImages] = useState("Choose Product Images");

  function submitProduct() {
    console.log(title);
    console.log(price);
    console.log(discountPrice);
    console.log(discountPercent);
    console.log(category);
    console.log(department);
    console.log(quantity);
    console.log(brand);
    console.log(ratings);
    console.log(desc);
    console.log(size.length);
    console.log(colors.length);
    console.log(thumbnail);
    console.log(images.length);
    console.log(images);



    // upload Images
    const data = new FormData();
    data.append("avatar", thumbnail);
    console.warn(thumbnail);
    let url = "https://api.labbaik.xyz/uploadx";
    axios.post(url, data).then((res) => {
      console.warn(res);
    });





  }

  const handleSizeChange = (event) => {
    let newArray = [...size, event.target.id];
    if (size.includes(event.target.id)) {
      newArray = newArray.filter((size) => size !== event.target.id);
    }
    setsize(newArray);
  };

  const handleColorChange = (event) => {
    let newArray = [...colors, event.target.id];
    if (colors.includes(event.target.id)) {
      newArray = newArray.filter((color) => color !== event.target.id);
    }
    setcolors(newArray);
  };

  const handleImage = (event) => {
    setimages(event.target.files);
    var imageNames = "";

    for (let item of event.target.files) {
      if (imageNames === "") {
        imageNames = item.name;
      } else {
        imageNames = imageNames + " , " + item.name;
      }
    }
    setselectedImages(imageNames);
  };

  return (
    <>
      <CRow>
        <CCol xs="12">
          <CFade timeout={300} in={showElements} unmountOnExit={true}>
            <CCard>
              <CCardHeader>Form Elements</CCardHeader>

              <CCardBody>
                <CForm
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal"
                >
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input">Product Name</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        onChange={(event) => settitle(event.target.value)}
                        id="text-input"
                        name="text-input"
                        placeholder="Name"
                      />
                      {/* <CFormText>This is a help text</CFormText> */}
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input">Product Price</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        onChange={(event) => setprice(event.target.value)}
                        id="text-input"
                        name="text-input"
                        placeholder="Product Price"
                      />
                      {/* <CFormText>This is a help text</CFormText> */}
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input">Discount</CLabel>
                    </CCol>

                    <CCol md="4">
                      <CInput
                        onChange={(event) =>
                          setdiscountPrice(event.target.value)
                        }
                        id="text-input"
                        name="text-input"
                        placeholder="Discount Price (optional)"
                      />
                    </CCol>
                    <CCol md="5">
                      <CInput
                        onChange={(event) =>
                          setdiscountPercent(event.target.value)
                        }
                        id="text-input"
                        name="text-input"
                        placeholder="Discount Percent (optional)"
                      />
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="select">
                        Selecet Category & Department
                      </CLabel>
                    </CCol>

                    <CCol md="4">
                      <CSelect
                        custom
                        name="category_name"
                        id="category"
                        onChange={(event) => setcategory(event.target.value)}
                      >
                        <option value="0">Please Select Category</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </CSelect>
                    </CCol>

                    <CCol md="5">
                      <CSelect
                        custom
                        name="department_name"
                        id="department"
                        onChange={(event) => setdepartment(event.target.value)}
                      >
                        <option value="0">Please Select Department</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </CSelect>
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="select">Product info</CLabel>
                    </CCol>

                    <CCol md="3">
                      <CInput
                        onChange={(event) => setquantity(event.target.value)}
                        id="text-input"
                        name="text-input"
                        placeholder="Quantity"
                      />
                    </CCol>

                    <CCol md="3">
                      <CInput
                        onChange={(event) => setbrand(event.target.value)}
                        id="text-input"
                        name="text-input"
                        placeholder="Brand"
                      />
                    </CCol>

                    <CCol md="3">
                      <CInput
                        onChange={(event) => setratings(event.target.value)}
                        id="text-input"
                        name="text-input"
                        placeholder="Ratings"
                      />
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="textarea-input">
                        Product Description
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CTextarea
                        onChange={(event) => setdesc(event.target.value)}
                        name="textarea-input"
                        id="textarea-input"
                        rows="6"
                        placeholder="Product Description ..."
                      />
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel>Sizes</CLabel>
                    </CCol>
                    <CCol md="9">
                      <CFormGroup variant="custom-checkbox" inline>
                        <CInputCheckbox
                          custom
                          id="small"
                          value="small"
                          onChange={handleSizeChange}
                        />
                        <CLabel variant="custom-checkbox" htmlFor="small">
                          Small
                        </CLabel>
                      </CFormGroup>

                      <CFormGroup variant="custom-checkbox" inline>
                        <CInputCheckbox
                          custom
                          id="medium"
                          value="medium"
                          onChange={handleSizeChange}
                        />
                        <CLabel variant="custom-checkbox" htmlFor="medium">
                          Medium
                        </CLabel>
                      </CFormGroup>

                      <CFormGroup variant="custom-checkbox" inline>
                        <CInputCheckbox
                          custom
                          id="large"
                          value="large"
                          onChange={handleSizeChange}
                        />
                        <CLabel variant="custom-checkbox" htmlFor="large">
                          Large
                        </CLabel>
                      </CFormGroup>
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel>Colors</CLabel>
                    </CCol>
                    <CCol md="9">
                      <CFormGroup variant="custom-checkbox" inline>
                        <CInputCheckbox
                          custom
                          id="black"
                          value="black"
                          onChange={handleColorChange}
                        />
                        <CLabel variant="custom-checkbox" htmlFor="black">
                          Black
                        </CLabel>
                      </CFormGroup>
                      <CFormGroup variant="custom-checkbox" inline>
                        <CInputCheckbox
                          custom
                          id="white"
                          value="white"
                          onChange={handleColorChange}
                        />
                        <CLabel variant="custom-checkbox" htmlFor="white">
                          White
                        </CLabel>
                      </CFormGroup>

                      <CFormGroup variant="custom-checkbox" inline>
                        <CInputCheckbox
                          custom
                          id="red"
                          value="red"
                          onChange={handleColorChange}
                        />
                        <CLabel variant="custom-checkbox" htmlFor="red">
                          Red
                        </CLabel>
                      </CFormGroup>

                      <CFormGroup variant="custom-checkbox" inline>
                        <CInputCheckbox
                          custom
                          id="blue"
                          value="blue"
                          onChange={handleColorChange}
                        />
                        <CLabel variant="custom-checkbox" htmlFor="blue">
                          Blue
                        </CLabel>
                      </CFormGroup>

                      <CFormGroup variant="custom-checkbox" inline>
                        <CInputCheckbox
                          custom
                          id="green"
                          value="green"
                          onChange={handleColorChange}
                        />
                        <CLabel variant="custom-checkbox" htmlFor="green">
                          Green
                        </CLabel>
                      </CFormGroup>
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row>
                    <CLabel col md="3" htmlFor="file-input">
                      Add Thumbnail
                    </CLabel>
                    <CCol xs="12" md="9">
                      <CInputFile
                        id="file-input"
                        name="file-input"
                        onChange={(event) =>
                          setthumbnail(event.target.files[0])
                        }
                      />
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel>Upload Product Images</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInputFile
                        id="file-multiple-input"
                        name="file-multiple-input"
                        multiple
                        custom
                        // onChange={(event) =>
                        //   setimages(event.target.files)

                        // }

                        onChange={handleImage}
                      />
                      <CLabel
                        htmlFor="file-multiple-input"
                        variant="custom-file"
                      >
                        {selectedImages}
                      </CLabel>
                    </CCol>
                  </CFormGroup>

                  <div
                    style={{ marginTop: 65, marginBottom: 10 }}
                    className="form-actions"
                  >
                    <CButton color="primary" onClick={submitProduct}>
                      Save changes
                    </CButton>
                    <CButton style={{ marginLeft: 25 }} color="secondary">
                      Cancel
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CFade>
        </CCol>
      </CRow>
    </>
  );
};

export default ProductInsert;
