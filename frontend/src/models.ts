import { JsonObject, JsonProperty } from 'typescript-json-serializer';

@JsonObject()
class Task {
    @JsonProperty({name:"description"})
    public description: string = "";
    @JsonProperty({name:"dueDate"})
    public dueDate: string = "";
    @JsonProperty({name:"completed"})
    public completed: boolean = false;
}

export {Task}