import { FC, useState } from "react";
import { UI, Control } from "@/components";
import { Lang } from "@/common/lang";
import { ThemeColor } from "@/store/ThemeStore";
import useForm from "@/components/Control/Form/useForm";
import useMessage from "@/components/UI/ToastMessage/useMessage";
import emailjs from "@emailjs/browser";

const { Button } = UI;

const { Form, FormItem, Input, InputPhone, TextArea } = Control;

interface ContactFormProps {
  lang: Lang;
  color: ThemeColor;
}

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  message: string;
}

const ContactForm: FC<ContactFormProps> = ({ lang, color }) => {
  const messageApi = useMessage();

  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm();

  const initialData: FormData = {
    fullName: "",
    phone: "",
    email: "",
    message: "",
  };

  const handleSendEmail = (formData: any) => {
    setLoading(true);
    emailjs
      .send("service_qw1jxnh", "template_dowyd17", formData, {
        publicKey: "UL1L9fRXplZ10GTaf",
      })
      .then(
        () => {
          setLoading(false);
          messageApi.success(lang.contact.messageSuccess);
          form?.resetForm();
        },
        () => {
          messageApi.success(lang.contact.messageError);
          setLoading(false);
        }
      );
  };

  return (
    <div className="contact-form">
      <Form<FormData>
        sizes="lg"
        color={color}
        disabled={loading}
        initialData={initialData}
        onFinish={handleSendEmail}
      >
        <FormItem name="fullName">
          <Input label={lang.contact.label.fullName} />
        </FormItem>
        <FormItem name="phone">
          <InputPhone label={lang.contact.label.phone} />
        </FormItem>
        <FormItem name="email">
          <Input label={lang.contact.label.email} />
        </FormItem>
        <FormItem name="message">
          <TextArea label={lang.contact.label.message} />
        </FormItem>
        <div className="form-foot">
          <Button sizes="lg" loading={loading}>
            {lang.contact.action}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ContactForm;
