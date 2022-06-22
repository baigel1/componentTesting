import get from "lodash/get";

export type FieldDataConstant = {
    mappingType: "CONSTANT";
    value: string;
  };
  
  export type FieldDataPath = {
    /** Indicates that the field data is mapped from the Result's raw data */
    mappingType: "FIELD";
    apiName: string | string[];
  };
  
  export type FieldData = FieldDataConstant | FieldDataPath;


function applyFieldDataPath(data: any, fieldMap: FieldDataPath): any {
    if (!Array.isArray(fieldMap.apiName)) {
      return get(data, fieldMap.apiName);
    }
    const apiNameWithData = fieldMap.apiName.find((apiName) =>
      get(data, apiName)
    );
    return apiNameWithData ? get(data, apiNameWithData) : undefined;
  }
  
  //map the fieldmappings to the results
  export function applyFieldMappings(
    rawData: Record<string, unknown>,
    fieldMappings: Partial<Record<string, FieldData>>
  ): Record<string, any> {
    if (!fieldMappings) {
      return {};
    }
  
    return Object.entries(fieldMappings).reduce(
      (acc: Record<string, any>, [field, mapping]) => {
        if (!mapping) {
          return acc;
        }
        if (mapping.mappingType === "CONSTANT") {
          acc[field] = mapping.value;
        } else {
          acc[field] = applyFieldDataPath(rawData, mapping);
        }
        return acc;
      },
      {}
    );
  }