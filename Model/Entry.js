export const postSchema = {
    title: String,
    content: String
};

export const Entry = mongoose.model("Entry", postSchema)