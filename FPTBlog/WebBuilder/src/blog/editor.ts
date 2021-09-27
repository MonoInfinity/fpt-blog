import { editor } from '../package/quill';
import { saveToServer, selectLocalImage } from '../package/quill/helper';
import { http } from '../package/axios';
import { ServerResponse } from '../package/interface/serverResponse';
import { routers } from '../package/axios/routes';
import { handleSelectBadge } from '../package/components/listBadge';

interface AddTagDto {
    blogId: string;
    tags: string[];
}
interface SaveBlogDto {
    title: string;
    content: string;
    blogId: string;
}

interface Tag {
    tagId: string;
    name: string;
}

editor.getModule('toolbar').addHandler('image', () => {
    selectLocalImage(editor, saveToServer);
});

const createBlogForm = document.getElementById('createBlogForm');
createBlogForm?.addEventListener('submit', function (event: Event) {
    event.preventDefault();

    const title = document.getElementById('title') as HTMLInputElement;
    const blogIdElement = document.getElementById('blogId') as HTMLInputElement;
    if (title !== null && editor !== null && blogIdElement !== null) {
        const input: SaveBlogDto = {
            title: title.value,
            content: editor.root.innerHTML,
            blogId: blogIdElement.value,
        };
        http.post<ServerResponse<null>>(routers.saveBlog, input).then(() => {});
    }
});

handleSelectBadge(
    'tag',
    async () => {
        const blogIdElement = document.getElementById('blogId') as HTMLInputElement;
        const { data } = await http.get<ServerResponse<Tag[]>>(routers.blog.getTagOfBlog(blogIdElement.value));

        return data.data.map((item) => item.name);
    },

    async () => {
        const tagInputElement = document.getElementById('tag');
        if (tagInputElement) {
            const url = routers.tag.getByName((tagInputElement as HTMLInputElement).value);
            const { data } = await http.get<ServerResponse<Tag[]>>(url);
            return data.data.slice(0, 10).map((item) => item.name);
        }

        return [];
    },
    async (label: string) => {
        const blogIdElement = document.getElementById('blogId') as HTMLInputElement;

        if (blogIdElement) {
            const input: AddTagDto = {
                blogId: blogIdElement.value,
                tags: [label],
            };

            const { data } = await http.post<ServerResponse<Tag[]>>(routers.blog.addNewTagToBlog, input);

            return data.data.map((item) => item.name);
        }
        return [];
    },
    async (label: string) => {
        return Promise.resolve();
    },
    500
);