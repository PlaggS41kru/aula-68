import { Form } from "react-hook-form";
const {Item} = Form
import IClass from "../interfaces/IClass";


export default function CreateClass(){
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Partial<IClass>>();
    
      const onSubmit = (data: Partial<IClass>) => {
        console.log("Dados enviados: ", {
          ...data,
          capacity: Number(data.capacity),
          hour: String(data.hour),
        });
      };

      return (
        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <Item 
          label = "Nome do Curso"
          validateStatus={errors.name ? "error" : ""}
          help={errors.name?.message}
          >
        <input
          type="text"
          {...register("name", { required: "Nome obrigatório" })}
          />
        </Item>

      <fieldset>
        <label htmlFor="room">Laboratório</label>
        <input
          type="text"
          id="room"
          {...register("room", {
            required: "Nome do laboratório obrigatório",
          })}
        />
        {errors.room && <p>{errors.room.message}</p>}
      </fieldset>

      <fieldset>
        <label htmlFor="capacity">Capacidade máxima</label>
        <input
          type="number"
          id="capacity"
          {...register("capacity", { required: "Capacidade obrigatória" })}
        />
        {errors.capacity && <p>{errors.capacity.message}</p>}
      </fieldset>

      <fieldset>
        <label htmlFor="day">Dia</label>
        <input
          type="text"
          id="day"
          {...register("day", { required: "Dia obrigatório" })}
        />
        {errors.day && <p>{errors.day.message}</p>}
      </fieldset>

      <fieldset>
        <label htmlFor="hour">Hora</label>
        <input
          type="time"
          id="hour"
          {...register("hour", { required: "Hora obrigatória" })}
        />
        {errors.hour && <p>{errors.hour.message}</p>}
      </fieldset>

      <button style={{color: "white"}} type="submit">Criar</button>
    </Form>
      )
    }