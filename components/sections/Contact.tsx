import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { Card } from "../ui/card";
import ContactForm from "../contact-form";
import Image from "next/image";
import Link from "next/link";
const Contact = () => {
  return (
    <section id="contact" className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Conéctate <span className="text-primary">Conmigo</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Estoy siempre abierto a explorar nuevos projectos, intercambiar ideas creativas u oportunidades para ser parte de tus visiones.
          </p>
          <div className="flex gap-4 mb-8">
            <Button variant={"outline"} size="icon" asChild>
              <Link href="https://github.com/antguivy" target="_blank">
                <FaGithub className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant={"outline"} size={"icon"} asChild>
              <a href="https://www.linkedin.com/in/antguivy/" target="_blank">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant={"outline"} size={"icon"} asChild>
              <a href="mailto:antguivy@gmail.com" target="_blank">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
          <Card className="px-6 py-6">
            <ContactForm />
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center mt-20"
        >
          <Image
            src={"/contact.svg"}
            alt="Contact Illustrations"
            width={600}
            height={600}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
