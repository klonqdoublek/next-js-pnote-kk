
import ContactCard from '../../components/ContactCard';

export default function Contact() {
  return (
    <div className="wrapper p-[16px] flex flex-col gap-[6px]">
      <h1 className="text-[24px]"> Contact </h1>
      <ContactCard name="John Doe" description="A good Person"
      imageUrl="https://avatar.iran.liara.run/public?test=1"/>
      <ContactCard name="Jane Doe" description="A good Person"
      imageUrl="https://avatar.iran.liara.run/public?test=2"/>
      <ContactCard name="Johny Doe" description="A good Person" 
      imageUrl="https://avatar.iran.liara.run/public?test=3" />
      <ContactCard name="Johny Doe" description="A good Person" 
      imageUrl="https://avatar.iran.liara.run/public?test=4" />
    </div>
  );
}

