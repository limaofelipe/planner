import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";

interface DestinationAndDateStepProps {
    isGuestsInputOpen: boolean
    closeGuestsInput: () => void
    openGuestsInput: () => void
}

export function DestinationAndDateStep({closeGuestsInput, openGuestsInput, isGuestsInputOpen} : DestinationAndDateStepProps) {
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
        <div className="flex items-center gap-2 flex-1">
          <MapPin className="size-5 text-zinc-400"/>
          <input disabled={isGuestsInputOpen} className="outline-none bg-transparent text-lg
            placeholder-zinc-400 flex-1" 
            type="text" placeholder="Para onde você vai?"
          />
        </div>

        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400"/>
          <input disabled={isGuestsInputOpen} className="outline-none bg-transparent text-lg
            placeholder-zinc-400 w-40"
            type="text" placeholder="Quando"
          />
        </div>


        <div className="w-px h-6 bg-zinc-800"/>


      {isGuestsInputOpen ? (
        <Button onClick={closeGuestsInput} variant="secondary">
          Alterar Local e data
          <Settings2 className="size-5"/>
        </Button>
      ) : (
            <Button onClick={openGuestsInput} variant="primary">
              <ArrowRight className="size-5"/>
              Continuar
            </Button>
      )}

      </div>
    )
}