import { CharacterAttributeInput } from "../../../../components/forms/CharacterAttributeInput";
import React, { SyntheticEvent } from "react";
import { toString } from "lodash";
import { FormikErrors, FormikTouched, FormikValues } from "formik";

export interface Values {
  strength: number;
  dexterity: number;
  vitality: number;
  intelligence: number;
  mind: number;
  piety: number;
}

interface AttributesFormProps {
  values: FormikValues;
  errors: FormikErrors<Values>;
  touched: FormikTouched<Values>;
  handleChange: (event: React.SyntheticEvent) => void;
}

export function CharacterAttributesForm({
  values,
  errors,
  touched,
  handleChange,
}: AttributesFormProps) {
  console.log(errors);
  return (
    <>
      <CharacterAttributeInput
        id="strength"
        label="Strength"
        description="The physical strength of your character."
        onChange={(e: SyntheticEvent) => handleChange(e)}
        value={toString(values.strength)}
        touched={touched.strength}
        errors={errors.strength}
      />
      <CharacterAttributeInput
        id="dexterity"
        label="Dexterity"
        description="The reaction speed of your character."
        onChange={(e: SyntheticEvent) => handleChange(e)}
        value={toString(values.dexterity)}
        touched={touched.dexterity}
        errors={errors.dexterity}
      />
      <CharacterAttributeInput
        id="vitality"
        label="Vitality"
        description="The hardiness of your character."
        onChange={(e: SyntheticEvent) => handleChange(e)}
        value={toString(values.vitality)}
        touched={touched.vitality}
        errors={errors.vitality}
      />

      <CharacterAttributeInput
        id="intelligence"
        label="Intelligence"
        description="The intellect of your character."
        onChange={(e: SyntheticEvent) => handleChange(e)}
        value={toString(values.intelligence)}
        touched={touched.intelligence}
        errors={errors.intelligence}
      />
      <CharacterAttributeInput
        id="mind"
        label="Mind"
        description="The strength of your character's resolve"
        onChange={(e: SyntheticEvent) => handleChange(e)}
        value={toString(values.mind)}
        touched={touched.mind}
        errors={errors.mind}
      />
      <CharacterAttributeInput
        id="piety"
        label="Piety"
        description="The power of your character's faith in a higher power."
        onChange={(e: SyntheticEvent) => handleChange(e)}
        value={toString(values.piety)}
        touched={touched.piety}
        errors={errors.piety}
      />
    </>
  );
}
