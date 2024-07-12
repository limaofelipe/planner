import { Tag, User, X } from "lucide-react"
import { Button } from "../../components/button"
import { FormEvent } from "react"
import { api } from "../../lib/axios"
import { useParams } from "react-router-dom"

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void
}

export function CreateActivityModal({
  closeCreateActivityModal
}: CreateActivityModalProps) {

  
  const {tripId} = useParams()

  async function createActivity (event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data= new FormData(event.currentTarget)

    const title = data.get("title")?.toString()

    const occurs_at = data.get("occurs_at")?.toString()

    await api.post(`/trips/${tripId}/activities`, {
      title,
      occurs_at
    } )

    window.document.location.reload()

  }


  return (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
    <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Cadastrar Atividade</h2>
          <button onClick={closeCreateActivityModal} type="button">
            <X className="size-5 text-zinc-400"/>
          </button>
        </div>
        <p className="text-sm text-zinc-400 text-left">
          Todos convidados podem visualizar as atividades<span className="font-semibold text-zinc-100">Florianópolis, Brasil</span> nas datas de <span className="font-semibold text-zinc-100">16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:
        </p>
      </div>

      <form onSubmit={createActivity} className="space-y-3">
        <div className="flex items-center gap-2 h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg">
          <Tag className="text-zinc-400 size-5"/>

          <input className="outline-none bg-transparent text-lg
          placeholder-zinc-400 flex-1" 
          name="title"
          placeholder="Qual a atividade?"
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex flex-1 items-center gap-2 h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg">
            <User className="text-zinc-400 size-5"/>

            <input className="outline-none bg-transparent text-lg
            placeholder-zinc-400 flex-1" 
            type="datetime-local" 
            name="occurs_at"
            placeholder="Data e horário da Atividade"
            />
          </div>
        </div>
        <Button type="submit" size="full" variant="primary">
          Salvar Atividade
        </Button>

      </form>
    </div>
  </div>


)}