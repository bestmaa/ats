import * as yup from "yup";

export let initialValues = {
  customer_name: "",
  parent_customer: 1,
  account_manager: "",
  address: "",
  city: "",
  email_id: 0,
  telephone_1: "",
  telephone_2: "",
  fax: "",
  postal_code: "",
  web_url: "",
  job_setcor: "",
  segment: "",
  skills: "",
  internal_customer_code: "",
};

export let validationSchema = yup.object().shape({
  customer_name: yup
    .string()
    .min(2, "First name needs to be at least 2 characters")
    .max(80, "First name can not be more than 80 characters")
    .required("First name required"),
  email: yup.string().email("Invalid email"),
  account_manager: yup.number().required('account_manager required'),
  address: yup.string().required("Address required"),
});

export let fields = [
  {
    label: "Customer Name",
    id: "customer_name",
    value: "customer_name",
    placeholder: "",
    datatype: "text",
  },
  {
    label: "Parent Customer",
    id: "parent_customer",
    value: "parent_customer",
    placeholder: "",
    datatype: "dropdown",
    dropdownfield:[{parent_Id:'',parent_value:'select'},{parent_Id:1,parent_value:'aditya'},{parent_Id:2,parent_value:'krushnkant'}],
    fieldValue:'parent_Id',
    display_name:'parent_value'
  },
  {
    label: "Account Manager",
    id: "account_manager",
    value: "account_manager",
    placeholder: "",
    datatype: "dropdown",
    dropdownfield:[{id:'',value:'select'},{id:1,value:'aditya'},{id:2,value:'krushnkant'}],
    fieldValue:'id',
    display_name:'value'
  },
  {
    label: "Address",
    id: "address",
    value: "address",
    placeholder: "",
    datatype: "textarea",
  },
  {
    label: "City",
    id: "city",
    value: "city",
    placeholder: "",
    datatype: "dropdown",
    dropdownfield:[{city_Id:'',city_value:'select'},{city_Id:1,city_value:'surat'},{city_Id:2,city_value:'varansi'}],
    fieldValue:'city_Id',
    display_name:'city_value'
  },
];
