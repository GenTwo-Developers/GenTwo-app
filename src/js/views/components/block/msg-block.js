import 'style/block/msg-block.css';

import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

class MsgBlock extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Card>
        <CardHeader
          avatar={
            <Avatar className="msg-block-icon">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="テストメッセージ"
          subheader="March 9,2021"
        />
        <CardMedia
          className="msg-block-media"
          image={this.props}
          title={this.props}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            これはgentwoの投稿メッセージ表示のテストです。
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}
export default MsgBlock;