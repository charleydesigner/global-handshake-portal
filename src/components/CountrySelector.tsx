
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// List of countries with their ISO codes
const countries = [
  { value: "af", label: "Afghanistan" },
  { value: "al", label: "Albania" },
  { value: "dz", label: "Algeria" },
  { value: "in", label: "India" },
  { value: "id", label: "Indonesia" },
  { value: "my", label: "Malaysia" },
  { value: "np", label: "Nepal" },
  { value: "ph", label: "Philippines" },
  { value: "pk", label: "Pakistan" },
  { value: "sa", label: "Saudi Arabia" },
  { value: "sg", label: "Singapore" },
  { value: "ae", label: "United Arab Emirates" },
  { value: "qa", label: "Qatar" },
  { value: "kw", label: "Kuwait" },
  { value: "om", label: "Oman" },
  { value: "bh", label: "Bahrain" },
  { value: "jp", label: "Japan" },
  { value: "kr", label: "South Korea" },
  { value: "hk", label: "Hong Kong" },
  { value: "ca", label: "Canada" },
  { value: "us", label: "United States" },
  { value: "gb", label: "United Kingdom" },
  { value: "au", label: "Australia" },
  { value: "nz", label: "New Zealand" },
];

interface CountrySelectorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}

export function CountrySelector({
  value,
  onChange,
  placeholder = "Select country",
  label,
}: CountrySelectorProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="space-y-2">
      {label && <label className="text-sm font-medium">{label}</label>}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {value
              ? countries.find((country) => country.value === value)?.label
              : placeholder}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search country..." />
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {countries.map((country) => (
                <CommandItem
                  key={country.value}
                  value={country.value}
                  onSelect={(currentValue) => {
                    onChange(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === country.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {country.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
