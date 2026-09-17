interface FormProps {
    onSubmit: (e: React.SubmitEvent) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    recieveName?: boolean;
}
const Form = ({ onSubmit, onChange, recieveName = true }: FormProps) => {
    return (
        <>
            <form onSubmit={onSubmit}>
                {!!recieveName && (
                    <label>
                        Name <input type="text" name="username" onChange={onChange} required />
                    </label>
                )}
                <label>
                    Email <input type="email" name="email" onChange={onChange} required />
                </label>
                <label>
                    Password{" "}
                    <input type="password" name="password" onChange={onChange} required />
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default Form;
