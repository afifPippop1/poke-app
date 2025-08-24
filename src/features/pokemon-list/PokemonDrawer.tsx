import { Drawer, DrawerContent, DrawerOverlay } from "@/components/ui/drawer";
import { useRouter, useSearchParams } from "next/navigation";
import { PokemonDetail } from "../pokemon-detail/PokemonDetail";

export function PokemonDrawer() {
  const searchParams = useSearchParams();
  const router = useRouter()
  const name = searchParams.get("pokemon");

  return (
    <Drawer open={!!name} onOpenChange={(value) => {
      if (!value){
        router.back();
      }
    }} direction="right">
      <DrawerOverlay />
      <DrawerContent>
        <PokemonDetail name={name!} />
      </DrawerContent>
    </Drawer>
  );
}
