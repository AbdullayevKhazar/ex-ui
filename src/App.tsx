import { useState } from "react";
import { Input } from "./Input/Input";
import { Search } from "lucide-react";

function App() {
  const [users, setUsers] = useState<string[]>([]);
  // İnputun içindəki yazını idarə etmək üçün state
  const [inputValue, setInputValue] = useState("");

  const handleSearch = async (value: string) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    const mockDb = ["Abdullah", "Aysel", "Abbas", "Cavid", "Cəlal"];

    if (value.trim() === "") {
      setUsers([]);
    } else {
      setUsers(
        mockDb.filter((u) => u.toLowerCase().includes(value.toLowerCase())),
      );
    }
  };

  return (
    <div className="p-20 max-w-md mx-auto">
      <Input
        isSearchInput
        label="İstifadəçi Axtar"
        leftIcon={<Search size={18} />}
        placeholder="Ad yazın..."
        value={inputValue} // İnputu state-ə bağlayırıq
        onChange={(e) => setInputValue(e.target.value)} // Yazdıqca state-i yeniləyirik
        onAsyncSearch={handleSearch} // Sizin super debounce məntiqiniz burda işləyir
        searchResults={users} // Tapılanları veririk (Input özü render edəcək)
        // Bir nəticəyə klikləyəndə nə olsun?
        onResultSelect={(seçilənAd) => {
          setInputValue(seçilənAd); // Seçilən adı input-a yazdırırıq
          setUsers([]); // Dropdown-u təmizləyirik
        }}
      />
      <Input
        variant="filled"
        label="Password"
        type="password"
        placeholder="Şifrəni daxil edin..."
        className="mt-6"
      />
    </div>
  );
}

export default App;
