import emailjs from "@emailjs/browser"

const Constact = () => {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:"",
        })

    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const validate = () => {
        let errors = {};
        if (!formData.name) errors.name = "Name is required";
        if (!formData.email) {
            errors.email = "Email is required";
        }
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
        }
        if (!formData.message) errors.message = "Message is required";
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationError = validate();
        if (Object.keys(validationError).length > 0) {
            setErrors(validationError);
        }
        else {
            setErrors({});
            setIsSending(true);
            emailjs
            .send(
                "service_nbeqc0v",
                "template_ji7661q",
                formData,
                "filmyQOOXxcbEqKsk"
            )
            .then((response) => {
                toast.success("Message sent successfully");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                console.log("FAILED - ", error);
                toast.error("Failed to send message. Please Try again.");
            })
            .finally(() => {
                setIsSending(false);
            });
        }
    };
    
    const [isCopied, setIsCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("qayyummaheen@gmail.com").then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        });
    };

    return (
        <div className="p-4 lg:w-3/4" id="contact">
            <Toaster/>
            <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">Let's Connect</h2>
            <form onSubmit={handleSubmit}>
                <div className=" mb-4  ">
                    <div className="flex gap-4">
                        <div className="lg:w-1/2">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                placeholder="Name"
                                onChange={handleChange}
                                className="placeholder:text-white my-2 w-full appearance-none rounded-lg
                                border border-white bg-transparent px-3 py-2 text-lg focus:border-stone-400 
                                focus:outline-none"
                            />
                            {errors.name && (
                                <p className="text-md font-bold text-white bg-red-600 max-w-32 rounded-lg px-2">
                                    {errors.name}
                                </p>
                            )}
                        </div>
        </div>
    )
}

export default Contact