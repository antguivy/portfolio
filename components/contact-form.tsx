"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { sendContactMessage } from "@/lib/actions";
import { Loader2, Mail, MessageSquare, Send, User } from "lucide-react";


const formSchema = z.object({
  name: z.string().min(2, "El nombre debe de tener al menos 2 caracteres"),
  email: z.string().email("Dirección electrónica inválida"),
  message: z.string().min(10, "El mensaje debe de tener al menos 10 caracteres"),
});

const ContactForm = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const isLoading = form.formState.isSubmitting
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
   
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("message", values.message);

      const result = await sendContactMessage(formData);

      if (result.success) {
        toast.success("¡Mensaje enviado con éxito! Te responderé pronto.", {
          description: "Gracias por contactarme, revisaré tu mensaje lo antes posible.",
        });
        form.reset();
      } else {
        toast.error(result.error || "Error al enviar el mensaje", {
          description: "Por favor, intenta nuevamente o contáctame directamente por email.",
        });
      }
    } catch (error) {
      toast.error("Error inesperado", {
        description: "Algo salió mal. Por favor, intenta nuevamente.",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Campo Nombre */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <User className="w-4 h-4 text-green-600" />
                Nombre completo
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Ej: Juan Pérez"
                  {...field}
                  className="h-12 px-4 bg-slate-50/50 border-slate-200 rounded-xl focus:border-green-500 focus:ring-green-500/20 focus:ring-2 transition-all duration-300 placeholder:text-slate-400"
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage className="text-xs text-red-500 mt-1" />
            </FormItem>
          )}
        />

        {/* Campo Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" />
                Correo electrónico
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Ej: juan@ejemplo.com"
                  {...field}
                  className="h-12 px-4 bg-slate-50/50 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-blue-500/20 focus:ring-2 transition-all duration-300 placeholder:text-slate-400"
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage className="text-xs text-red-500 mt-1" />
            </FormItem>
          )}
        />

        {/* Campo Mensaje */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-purple-600" />
                Tu mensaje
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Cuéntame sobre tu proyecto, idea o consulta. Mientras más detalles, mejor podré ayudarte..."
                  {...field}
                  className="min-h-[120px] px-4 py-3 bg-slate-50/50 border-slate-200 rounded-xl focus:border-purple-500 focus:ring-purple-500/20 focus:ring-2 transition-all duration-300 placeholder:text-slate-400 resize-none"
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage className="text-xs text-red-500 mt-1" />
            </FormItem>
          )}
        />

        {/* Botón Submit */}
        <div className="pt-2">
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 hover:from-green-700 hover:via-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Enviando mensaje...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Enviar mensaje
              </>
            )}
          </Button>
        </div>

        {/* Nota informativa */}
        <div className="pt-4 border-t border-slate-100">
          <p className="text-xs text-slate-500 text-center leading-relaxed">
            Al enviar este formulario, aceptas que me contacte contigo para responder tu consulta.
            <br />
            <span className="text-green-600 font-medium">
              Respondo en menos de 24 horas ⚡
            </span>
          </p>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;