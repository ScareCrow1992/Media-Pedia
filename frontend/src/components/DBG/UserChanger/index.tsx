import DropdownMenu from "src/components/common/Dropdown/DropdownMenu";
import DropdownElement from "src/components/common/Dropdown/DropdownElement";
import { UserDTO } from "@/apis/user/types";


interface Props {
    // children: React.ReactNode;
    users: UserDTO[];
    onSelectUser: (user: UserDTO) => void;
}


export default function UserChanger({ users, onSelectUser }: Props) {

    // console.log("UserChanger");
    // users?.map(user => { console.log(user) });

    return (
        <DropdownMenu>
            {users?.map(user => (
                <DropdownElement
                    key={user.id}
                    label={user.nickname}
                    value={user.id.toString()}
                    onSelect={() => onSelectUser(user)}
                />
            ))}

            {/* <DropdownElement label="좋아요 순" value="like" />
            <DropdownElement label="유저 반응 순" value="reaction" />
            <DropdownElement label="높은 평가 순" value="high" />
            <DropdownElement label="낮은 평가 순" value="low" /> */}

        </DropdownMenu>
    )
}