import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid"
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function createData(
    col1: string,
    col2: string,
    col3: number,
    col4: number,
    col5: number,
    col6: number,
    col7: number,
    col8: string,
    col9: string,
    col10: string) {
    return {
        col1,
        col2,
        col3,
        col4,
        col5,
        col6,
        col7,
        col8,
        col9,
        col10
    };
}

const rows = [
    createData('XXXXX', 'XXXXX', 99999, 99999, 99999, 99999, 99999, 'XXXXX', 'XXXXX', 'XXXXX'),
    createData('XXXXX', 'XXXXX', 99999, 99999, 99999, 99999, 99999, 'XXXXX', 'XXXXX', 'XXXXX'),
    createData('XXXXX', 'XXXXX', 99999, 99999, 99999, 99999, 99999, 'XXXXX', 'XXXXX', 'XXXXX'),
    createData('XXXXX', 'XXXXX', 99999, 99999, 99999, 99999, 99999, 'XXXXX', 'XXXXX', 'XXXXX'),
    createData('XXXXX', 'XXXXX', 99999, 99999, 99999, 99999, 99999, 'XXXXX', 'XXXXX', 'XXXXX')
];

export default class UriageDenpyoNyuryoku extends Component {
    render () {
        return (
            <div>
                <Grid container>
                    <Grid item xs={12}><h1>売上伝票 入力(枚数)＜デプロイチェック＞</h1></Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={3}>
                        <TextField label="部署" defaultValue="40: 営業部Ｃ" InputProps={{readOnly: true}} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField label="担当" defaultValue="23: 中野" InputProps={{readOnly: true}} />
                    </Grid>
                    <Grid item xs={2}>
                        <FormControl>
                            <FormLabel>売買区分</FormLabel>
                            <RadioGroup row>
                                <FormControlLabel value="1" control={<Radio />} label="外部" />
                                <FormControlLabel value="2" control={<Radio />} label="内部" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                        <FormControl>
                            <FormLabel>預り区分</FormLabel>
                            <RadioGroup row>
                                <FormControlLabel value="1" control={<Radio />} label="通常" />
                                <FormControlLabel value="2" control={<Radio />} label="預り" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                        <FormControl>
                            <FormLabel>返品区分</FormLabel>
                            <RadioGroup row>
                                <FormControlLabel value="1" control={<Radio />} label="通常" />
                                <FormControlLabel value="2" control={<Radio />} label="返品" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <TextField label="処理日" type="date" defaultValue="2020-01-01" />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField label="発生日" type="date" defaultValue="2020-01-01" />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField label="振替日" type="date" defaultValue="2020-01-01" />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField label="日数" />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={3}>
                        <FormControl>
                            <FormLabel>得意先</FormLabel>
                            <RadioGroup row>
                                <FormControlLabel value="1" control={<Radio />} label="担当" />
                                <FormControlLabel value="2" control={<Radio />} label="全件" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl>
                            <InputLabel id="label-haitanto">配担当</InputLabel>
                            <Select labelId="label-haitanto">
                                <MenuItem value={1}>1: XXXXXXXXXX</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                        <TextField label="出庫日" type="date" defaultValue="2020-01-01" />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField label="名変日" type="date" defaultValue="2020-01-01" />
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <FormControl>
                            <InputLabel id="label-tokuisaki">得意先</InputLabel>
                            <Select labelId="label-tokuisaki">
                                <MenuItem value={1}>1: XXXXXXXXXX</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                        <FormControl>
                            <InputLabel id="label-zeiku">税区</InputLabel>
                            <Select labelId="label-zeiku">
                                <MenuItem value={1}>1: 外税8%</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}>
                        <Button variant="contained" color="primary">処理</Button>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>品名</TableCell>
                                        <TableCell>サイズ</TableCell>
                                        <TableCell align="right">容量</TableCell>
                                        <TableCell align="right">入数</TableCell>
                                        <TableCell align="right">枚数</TableCell>
                                        <TableCell align="right">単価</TableCell>
                                        <TableCell align="right">金額</TableCell>
                                        <TableCell>原産地・原料原産地</TableCell>
                                        <TableCell>加工地・原産国名</TableCell>
                                        <TableCell>育成</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map(row => (
                                        <TableRow>
                                            <TableCell>{row.col1}</TableCell>
                                            <TableCell>{row.col2}</TableCell>
                                            <TableCell align="right">{row.col3}</TableCell>
                                            <TableCell align="right">{row.col4}</TableCell>
                                            <TableCell align="right">{row.col5}</TableCell>
                                            <TableCell align="right">{row.col6}</TableCell>
                                            <TableCell align="right">{row.col7}</TableCell>
                                            <TableCell>{row.col8}</TableCell>
                                            <TableCell>{row.col9}</TableCell>
                                            <TableCell>{row.col10}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <Button variant="contained" color="secondary">一行削除</Button>
                        <Button variant="contained" color="secondary">明細クリア</Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
